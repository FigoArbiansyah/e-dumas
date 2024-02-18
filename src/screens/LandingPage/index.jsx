import { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
// import CommunityImage from '../../assets/images/community.png';
import MegaphoneImage from '../../assets/images/megaphone.png';
import DataImage from '../../assets/images/data.png';

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <main className='min-h-screen pb-32 relative'>
      <section className='p-5 bg-gradient-to-b from-sky-600 to-transparent'>
        <div className="flex justify-end">
          <Button
            variant="contained"
            color='inherit'
            onClick={() => navigate('/login')}
            className='font-poppins'
            style={{
              fontWeight: 500,
              fontFamily: 'Poppins, sans-serif',
              backgroundColor: 'rgb(56 189 248)',
              color: 'white',
            }}
          >Login</Button>
        </div>
        <div className="pt-12 text-center">
          <h1 className='text-slate-50 text-center text-3xl font-bold'>E-DUMAS</h1>
          <p className="mt-2 text-slate-100">
            Aplikasi Penga<b>du</b>an <b>Mas</b>yarakat
          </p>
          <img src={MegaphoneImage} alt="Community Image" className='w-[250px] mx-auto mt-5' />
        </div>
      </section>
      <section className='p-5 pt-8'>
        <p className='text-slate-800 mb-4'>
          <b>
            E-DUMAS
          </b> <span>
            bisa digunakan untuk anda yang punya keluhan dan ingin melaporkannya ke RT setempat.
          </span> <span>
            Lihat dan cek juga data yang ada di desa/kelurahan anda di halaman dashboard.
          </span>
        </p>
        <img src={DataImage} alt="Data Image" className='w-full mx-auto' />
      </section>
      <footer className='p-5 absolute bottom-0 w-full bg-white text-slate-800'>
        <p className='text-sm'>Dikembangkan oleh <a href="https://www.instagram.com/figo_arbnsyh" className='font-semibold hover:text-sky-400'>Figo Arbiansyah</a></p>
      </footer>
    </main>
  );
};

export default memo(LandingPage);
