// "use client";

// import Image from "next/image";

// type LeaderProfileProps = {
//   position: 1 | 2 | 3;
// };

// export default function LeaderProfile({ position }: LeaderProfileProps) {
//   const isFirst = position === 1;
//   const isSecond = position === 2;

//   const imageSize = isFirst ? 190 : 140;
//   const borderColor = isFirst
//     ? "border-yellow-400"
//     : isSecond
//     ? "border-gray-400"
//     : "border-[#D8B7A4]";
//   const badgeColor = isFirst
//     ? "bg-yellow-400"
//     : isSecond
//     ? "bg-gray-300"
//     : "bg-[#D8B7A4]";
//   const starIcon =
//     position === 1
//       ? "/icons/leaderboardstar1.png"
//       : position === 2
//       ? "/icons/leaderboardstar2.png"
//       : "/icons/leaderboardstar3.png";
//   const starLeft = isFirst ? "left-18" : "left-13";
//   const topRoundIcon =
//     position === 1 ? (
//       <Image
//         src="/icons/leaderboardtopround.svg"
//         alt="Top Background"
//         width={385}
//         height={385}
//         className="absolute -top-12 -left-12 max-w-72 p-4"
//       />
//     ) : null;

//   return (
//     <div
//       className={`w-max h-max flex flex-col items-center ${
//         isFirst ? "gap-10" : "gap-4 pt-18"
//       } relative`}
//     >
//       <div className="w-max h-max relative">

//         {topRoundIcon}

//         <Image
//           src="/leaderpfp.png"
//           alt="Leader"
//           width={imageSize}
//           height={imageSize}
//           className={`rounded-full border-3 ${borderColor}`}
//         />

//         <span
//           className={`absolute -top-2 ${isFirst ? "left-19" : "left-14"} w-6 h-6 flex items-center justify-center p-4 font-bold ${badgeColor} rounded-full z-10`}
//         >
//           {position}
//         </span>

//         <Image
//           src={starIcon}
//           alt={`Rank ${position}`}
//           width={40}
//           height={40}
//           className={`absolute -top-4 ${starLeft}`}
//         />
//       </div>
//       <div className="w-max h-max text-center">
//         <p className="w-max h-max flex items-center justify-center bg-[#F4F4F4] px-2.5 py-1 rounded-full text-lg font-medium">
//           Ugochukwu Ahmed
//         </p>
//         <span className="text-[#7A7B7C] text-lg font-light">950XP</span>
//       </div>
//     </div>
//   );
// }

"use client";

import Image from "next/image";

type LeaderProfileProps = {
    position: 1 | 2 | 3;
};

export default function LeaderProfile({position}: LeaderProfileProps) {
    const isFirst = position === 1;
    const isSecond = position === 2;

    // Responsive sizes
    const imageSize = isFirst ? 170 : 120;
    const mobileImageSize = isFirst ? 100 : 70;

    const borderColor = isFirst
        ? "border-yellow-400"
        : isSecond
        ? "border-gray-400"
        : "border-[#D8B7A4]";

    const badgeColor = isFirst
        ? "bg-yellow-400"
        : isSecond
        ? "bg-gray-300"
        : "bg-[#D8B7A4]";

    const starIcon =
        position === 1
            ? "/icons/leaderboardstar1.png"
            : position === 2
            ? "/icons/leaderboardstar2.png"
            : "/icons/leaderboardstar3.png";

    const starLeft = isFirst ? "left-8 sm:left-16" : "left-5 sm:left-10";

    const topRoundIcon =
        position === 1 ? (
            <Image
                src="/icons/leaderboardtopround.svg"
                alt="Top Background"
                width={385}
                height={385}
                className="absolute sm:-top-15.5 -top-9.5 -left-9.5 sm:-left-14.5 sm:max-w-72 max-w-44 p-6 sm:block"
            />
        ) : null;

    return (
        <div
            className={`w-max h-max flex flex-col items-center ${
                isFirst ? "gap-14 sm:gap-9" : "gap-4 pt-18 sm:gap-3 sm:pt-19"
            } relative`}
        >
            <div className="w-max h-max relative">
                {topRoundIcon}

                <Image
                    src="/leaderpfp.png"
                    alt="Leader"
                    width={imageSize}
                    height={imageSize}
                    className={`hidden sm:block rounded-full border-3 ${borderColor}`}
                />
                <Image
                    src="/leaderpfp.png"
                    alt="Leader"
                    width={mobileImageSize}
                    height={mobileImageSize}
                    className={`sm:hidden rounded-full border-3 ${borderColor}`}
                />

                <span
                    className={`absolute -top-4 sm:-top-3 ${starLeft} sm:w-6 w-4 sm:h-6 h-4 flex items-center justify-center p-4 font-bold ${badgeColor} rounded-full z-10 text-sm`}
                >
                    {position}
                </span>

                <Image
                    src={starIcon}
                    alt={`Rank ${position}`}
                    width={40}
                    height={40}
                    className={`absolute -top-6 sm:-top-6 ${
                        position === 1
                            ? "left-9 sm:left-15"
                            : "left-6 sm:left-9"
                    } hidden sm:block`}
                />
                <Image
                    src={starIcon}
                    alt={`Rank ${position}`}
                    width={25}
                    height={25}
                    className={`absolute -top-6 sm:-top-3 ${
                        position === 1 ? "left-9 " : "left-6 "
                    } sm:left-10 sm:hidden`}
                />
            </div>

            <div className="w-max h-max text-center">
                <p className="w-24 sm:w-max h-max flex items-center justify-center bg-[#F4F4F4] px-2.5 py-1 rounded-full text-xs sm:font-medium sm:text-lg ">
                    Ugochukwu Ahmed
                </p>
                <span className="text-[#7A7B7C] text-sm sm:text-lg font-light">
                    950XP
                </span>
            </div>
        </div>
    );
}
