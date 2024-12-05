import TopNav from '@/app/ui/dashboard/topnav';
import '@/app/dashboard/ui/style.dashboard.css'
 
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='' >
      <div className="cat-menu w-full flex-none md:w-84">
        <TopNav />
      </div>
      <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}