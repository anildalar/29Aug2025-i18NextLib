//1. Import area
import { useEffect, useState } from 'react'
import './App.css'
import i18n from './i18n'
//import someDefault from 'somelib';
import anil from 'axios';

//import {someNamed} from 'somelib';
import { BASE_URL } from './helper/Helper';

//2. Function defination area
function App() {
  //2.1 Hooks Area
  const [language,setLanguage] = useState([]);

  useEffect(()=>{
    try {
        anil.get(`${BASE_URL}/api/i18n/locales`)
          .then(function (r) {
            // handle success
            console.log(r?.data);
            setLanguage(r?.data);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .finally(function () {
            // always executed
          });
    } catch (err) {
      console.log(err);
    }
  },[])

  //2.2 Function defination area
  const changeLanguage = (lng) => {
    console.log('lng>>>>>>>>',lng);
    i18n.changeLanguage(lng);
  }
  //2.3 Return statement
  return (
    <>
        <div className="row mt-5">
          <div className="col-4 offset-3">
              <div className="btn-group" role="group" aria-label="Button group with nested dropdown">
                  <div className="btn-group" role="group">
                    <button type="button" className="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                      Select Language
                    </button>
                    <ul className="dropdown-menu">
                      {
                        language.length > 0 &&
                          language.map((cv,idx,arr)=>{
                            return (
                              <li key={idx}><button className="dropdown-item" onClick={() => changeLanguage(cv.code)}>{cv.name}</button></li>
                            );
                          })
                      }
                    </ul>
                  </div>
                </div>

              <h1>Restaurent {i18n.t('palak')} </h1>
          </div>
        </div>
    </>
  )
}


//3. Export area
//3.1 Named Export
//3.2 Default Export
//It is Default Export
export default App
