import React from 'react';
import AppNavBar from "../../components/appNavBar/AppNavBar.jsx";
import MainSection from "../../components/MainSection/MainSection.jsx";

const MyAuctionsPage = ({title}) => {
  return (
      <>
          <AppNavBar/>
          <MainSection PageContent={'a'} title={title}/> {/*Вставить свой контент в Page content*/}
      </>
  );
}

export default MyAuctionsPage;
