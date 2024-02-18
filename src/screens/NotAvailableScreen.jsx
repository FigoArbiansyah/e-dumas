import React from 'react';
import DevelopmentImage from '../assets/images/development.png';

const NotAvailableScreen = () => (
  <main>
    <section className='min-h-svh flex justify-center items-center'>
      <div>
        <div className='mb-4'>
          <h1 className="text-2xl font-semibold text-center text-slate-700">Upss, maaf ya, tampilan untuk <br /> layar desktop masih kami kembangkan 🙏.</h1>
        </div>
        <div>
          <img src={DevelopmentImage} alt="Development Image" className='w-[300px] mx-auto' />
        </div>
      </div>
    </section>
  </main>
);

export default React.memo(NotAvailableScreen);
