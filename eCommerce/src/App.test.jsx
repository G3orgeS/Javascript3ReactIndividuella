// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import { Provider } from 'react-redux';
// import { createBrowserRouter, RouterProvider } from 'vitest';
// import { configureStore, combineReducers } from '@reduxjs/toolkit';
// import Store from './store';
// import { BrowserRouter as Router } from 'react-router-dom';
// // import Footer from './components/universal/footer/Footer';
// import productsReducer from './store/products/productsSlice'
// import productsSlice from './store/products/productsSlice'
// import ordersSlice from './store/orders/ordersSlice';
// import singleProductReducer from './store/products/singleProductSlice'
// import authSlice from './store/auth/authSlice';
// import singleOrderSlice from './store/orders/singleOrderSlice';



// const rootReducer = combineReducers({
//     products: productsReducer,
//     singleProduct: singleProductReducer,
//     productList: productsSlice,
//     orderList: ordersSlice,
//     auth: authSlice,
//     singleOrder: singleOrderSlice
// })

// const testStore = configureStore({
//     reducer: rootReducer,
// });


// const MockRouter = () => {

//     const router = createBrowserRouter([
//       {
//         path: '/',
//         element: <Footer />
//       }
//     ]);
  
//     return (
//       <Provider store={testStore}>
//         <RouterProvider router={router} />
//       </Provider>
//     );
//   };

//     describe('Footer', () => {
//         it('should include a paragraph', () => {
//           render(<testStore />);
//           const text = screen.getByText('© 2023 ');
//           expect(text).toBeInTheDocument();
//         });
//       });

// describe('Footer', () => {
//     test('renders footer with correct text', () => {
//         render(
//             <Provider store={testStore}>
//                 <Router>
//                     <MockRouter>
//                         <Footer />
//                     </MockRouter>
//                 </Router>
//             </Provider>
//         );

//         expect(screen.getByText('© 2023')).toBeInTheDocument();
//     });
// });