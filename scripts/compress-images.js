const fs = require("fs").promises;
const path = require("path");
const sharp = require("sharp");

const inputDir = path.join(__dirname, "public", "posts");
const outputDir = path.join(__dirname, "public", "posts-compressed");

async function compressImage(inputPath, outputPath) {
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();

    let compressedImage;
    if (metadata.format === "jpeg" || metadata.format === "jpg") {
      compressedImage = image.jpeg({ quality: 80 });
    } else if (metadata.format === "png") {
      compressedImage = image.png({ quality: 80 });
    } else {
      // For other formats, just copy the file without compression
      await fs.copyFile(inputPath, outputPath);
      console.log(`Copied (unsupported format): ${outputPath}`);
      return;
    }

    await compressedImage.toFile(outputPath);
    console.log(`Compressed: ${outputPath}`);
  } catch (error) {
    console.error(`Error processing ${inputPath}: ${error.message}`);
    // Copy the file if it can't be processed
    await fs.copyFile(inputPath, outputPath);
    console.log(`Copied (error during processing): ${outputPath}`);
  }
}

async function processDirectory(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    const relativePath = path.relative(inputDir, fullPath);
    const outputPath = path.join(outputDir, relativePath);

    if (entry.isDirectory()) {
      await fs.mkdir(outputPath, { recursive: true });
      await processDirectory(fullPath);
    } else if (entry.isFile() && !/\.(webp|gif|mov)$/i.test(entry.name)) {
      await compressImage(fullPath, outputPath);
    } else {
      // Copy WebP, GIF, and MOV files without processing
      await fs.copyFile(fullPath, outputPath);
      console.log(`Copied: ${outputPath}`);
    }
  }
}

async function main() {
  try {
    await fs.mkdir(outputDir, { recursive: true });
    await processDirectory(inputDir);
    console.log("Image processing completed successfully!");
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

main();
