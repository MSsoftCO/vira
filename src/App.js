import React from 'react';
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import TabList from "./components/TabList";
import Filter from "./components/Filter";
import Transfer from "./components/Transfer";

function App() {
  return (
    <React.Fragment>
      <Header/>
      <main role="main" className="container-fluid">
        <div className="row">
          <Sidebar/>
          <div className="main-content">
            <TabList/>
            <div className="tab-content row">
              <div className="col-12 col-sm-6 col-md-5 col-lg-4 col-xl-3">
                <Filter/>
              </div>
              <div className="col-12 col-sm-6 col-md-7 col-lg-8 col-xl-9">
                <Transfer/>
              </div>
            </div>

          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default App;
