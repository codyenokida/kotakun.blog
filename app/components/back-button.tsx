import Link from "next/link";

const BackArrowSVG = ({ className }: { className: string }) => {
  return (
    <svg
      width="28"
      height="13"
      viewBox="0 0 28 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M26.3302 5.74103C23.91 5.70128 20.6266 4.26107 17.8545 4.35833M17.8545 4.35833C16.4641 4.40712 15.2023 4.84266 14.2426 6.03566C12.8939 7.7122 12.5958 11.5745 15.6342 11.391C17.4689 11.2801 17.9322 6.97635 17.8545 4.35833ZM17.8545 4.35833C17.831 3.567 17.7581 2.92968 17.6586 2.60873C16.9964 0.470831 13.4195 0.944345 11.8225 1.3724C8.89443 2.15721 6.05652 4.16753 3.60484 5.90426L3.57957 5.92216M7.07333 6.95271C5.74677 7.08984 4.52686 7.7091 3.16311 7.72037C2.77168 7.7236 1.9411 7.95164 1.97726 7.41797C2.04123 6.47397 2.22118 5.51879 2.39618 4.58987L2.39986 4.57032C2.45076 4.30014 2.56967 3.48737 2.56515 3.76226"
        stroke="#4F8F4A"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default function BackButton() {
  return (
    <Link href="/" className="back-button group">
      <div className="flex gap-1 items-center mb-12">
        <BackArrowSVG className="group-hover:wiggle" />
        back home
      </div>
    </Link>
  );
}
