import ReactDOM from 'react-dom/client';
import PaymentList from './PaymentList';

const mount = (el: Element) : void => {
 const root : ReactDOM.Root = ReactDOM.createRoot(el);
 root.render(<PaymentList />);
}
export { mount }; 
