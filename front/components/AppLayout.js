import propsTypes, { node } from 'prop-types';

const AppLayout = ({ children }) => {
  return (
    <div>
      <div>공통메뉴</div>
      {children}
    </div>
  );
};

AppLayout.prototype = {
  children: propsTypes.node.isRequired,
};

export default AppLayout;
