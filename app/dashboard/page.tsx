import '@/app/dashboard/ui/style.dashboard.css';
import '@/public/fonts/font-awesome/h5p-font-awesome.min.css'

export default function Page() {
    return ( 
      
      <header className="page-header">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <a href="index.html" className="brand">
              <div className="brand-name">
                Gourmet
              </div>
              <div className="brand-slogan">
                since 1978
              </div>
            </a>
          </div>
        </div>
        <h1>
          royal
          <span className="heading-2 text-secondary-1">catering</span>
          <span className="heading-6">Fabulous Food at Affordable Prices!</span>
        </h1>
      </div>
      <div className="image-wrap image-wrap-1">
      </div>
    </header>
    );
  }