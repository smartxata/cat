import Link from 'next/link';
import NavLinks from '@/app/ui/dashboard/nav-links'; 

export default function TopNav() {
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">

       <div className="flex grow  flex-col  space-y-2 md:flex-row md:space-y-0 md:space-x-0">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
         
      </div>
    </div>
  );
}
