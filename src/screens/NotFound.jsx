import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '@mui/material/Button';
import NotFoundImage from '../assets/images/not-found.png';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <main>
      <section className='min-h-svh flex justify-center items-center'>
        <div>
          <div className='mb-4'>
            <h1 className="text-2xl font-semibold text-center text-slate-700">Halaman tidak ditemukan.</h1>
          </div>
          <div>
            <img src={NotFoundImage} alt="Development Image" className='w-[300px] mx-auto' />
          </div>
          <div className="flex justify-center mt-4">
            <Button
              variant="contained"
              color='inherit'
              onClick={() => navigate('/')}
              className='font-poppins'
              style={{
                fontWeight: 500,
                fontFamily: 'Poppins, sans-serif',
                backgroundColor: 'rgb(56 189 248)',
                color: 'white',
              }}
            >Kembali ke halaman depan</Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default React.memo(NotFound);
