import React from 'react';

const Detail = () => {
  return (
    <>
      <div className="m_main m_dtl_main bg-white mx-auto">
        <div className="m_dtl_top_bannar"></div>
        <div className="row m-0 m_dtl_productcontainer">
          <div className="col-9 tdr">A</div>
          <div className="col-3 tdr">B</div>
        </div>
        <div className="m_dtl_produContBottom border-top border-bottom mb-1"></div>
        <div className="m_dtl_haveQ border-top"></div>
        <div className="m_dtl_prodRelItem border-top border-bottom">
          <h5>Products related to this item</h5>
        </div>
        <div className="m_dtl_cusAlsoView border-top border-bottom">
          <h5>Customers who viewed this item also viewed</h5>
        </div>
        {/* product detail */}
        <div className="m_dtl_prodInfo">
          <div className="row"></div>
          <div className="row"></div>
        </div>
      </div>
    </>
  );
};
export default Detail;
