// Init
import React, { useEffect } from 'react';
import { ToastContainer, Flip } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from './api';

// Files
import Index from './routes/index';
import './css/index.css';
import { UpdateStore } from './StoreContext';

// Component
function App() {
  const token = localStorage.getItem('token');
  const updateStore = UpdateStore();
  const handleUser = () => {
    api('get', 'auth')
      .then((res) => {
        updateStore({ user: res?.data?.user });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    if (token) {
      handleUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      {/* toastify Container for Notification */}
      <ToastContainer position="bottom-right" autoClose={3000} hideProgressBar transition={Flip} />
      {/* Routes */}
      <Index />
    </div>
  );
}

// Export
export default App;
