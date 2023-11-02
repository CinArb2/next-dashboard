import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { inter } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${inter.className} flex flex-row items-center leading-none py-3`}
    >
      <GlobeAltIcon className="bg-gray-50 h-8 rotate-[15deg]" />
      <p className="text-[25px]">Acme</p>
    </div>
  );
}
