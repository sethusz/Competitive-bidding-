import React, {useState} from 'react';
import './UserInfo.scss'

import info from '@/assets/cabinet/info.svg'
import logo from '@/assets/cabinet/logo.svg'
import user from '@/assets/cabinet/user.svg'

const UserInfo = () => {

    return (
        <article className="user-info">
           <div className="cabinet-block user-info__settings">
              <div className="item-top">
                  <img src={logo} alt="" className="item-top__avatar"/>
                  <div className="item-top__info">
                          <div className="item-top__status">Unconfirmed</div>
                          <span className="item-top__title">ID: 78950430</span>
                  </div>
              </div>
               <div className="item-bottom">
                   <button className="user-info__button">Settings</button>
               </div>
           </div>
           <div className="cabinet-block user-info__level">
               <img src={logo} alt=""/>
               <div className="level-content">
                   <div className="level-content__title">
                       <p>
                           Уровень авторизации
                       </p>
                       <i>
                           <img src={info} alt=""/>
                       </i>
                   </div>
                   <span className="level-content__status not-verified">Не верифицирован!</span>
               </div>
           </div>
           <div className="cabinet-block user-info__item">
               <div className="item-top">
                   <div className="item-top__image">
                       <img src={user} alt=""/>
                   </div>
                   <div className="item-top__info">
                       <div className="item-top__content">
                           <p className="item-top__content-title">Name</p>
                           <span className="item-top__content-subtitle"></span>
                       </div>
                       <div className="item-top__status">Enter a name</div>
                   </div>
               </div>
               <div className="item-bottom">
                    <button className="user-info__button">Set</button>
               </div>
           </div>
           <div className="cabinet-block user-info__item">
               <div className="item-top">
                   <div className="item-top__image">
                       <img src={user} alt=""/>
                   </div>
                   <div className="item-top__info">
                       <div className="item-top__content">
                           <p className="item-top__content-title">E-mail</p>
                           <span className="item-top__content-subtitle">viktory.mrs@icloud.com</span>
                       </div>
                       <div className="item-top__status">Not Confirmed</div>
                   </div>
               </div>
               <div className="item-bottom">
                   <div className="item-bottom__content">
                       <p>The confirmation letter was sent to the post office</p>
                       <i>
                           <img src={info} alt=""/>
                       </i>
                   </div>
               </div>
           </div>

            <div className="cabinet-block user-info__item">
                <div className="item-top">
                    <div className="item-top__image">
                        <img src={user} alt=""/>
                    </div>
                    <div className="item-top__info">
                        <div className="item-top__content">
                            <p className="item-top__content-title">Phone</p>
                            <span className="item-top__content-subtitle">+7 912 609 79 07</span>
                        </div>
                        <div className="item-top__status confirmed">Confirmed</div>
                    </div>
                </div>
                <div className="item-bottom">
                    <button className="user-info__button">Confirm</button>
                </div>
            </div>
            <div className="cabinet-block user-info__item">
                <div className="item-top">
                    <div className="item-top__image">
                        <img src={user} alt=""/>
                    </div>
                    <div className="item-top__info">
                        <div className="item-top__content">
                            <p className="item-top__content-title">Instagram</p>
                            <span className="item-top__content-subtitle"></span>
                        </div>
                        <div className="item-top__status">Not Confirmed
                        </div>
                    </div>
                </div>
                <div className="item-bottom">
                    <button className="user-info__button">Set</button>
                </div>
            </div>
            <div className="cabinet-block user-info__item">
                <div className="item-top">
                    <div className="item-top__image">
                        <img src={user} alt=""/>
                    </div>
                    <div className="item-top__info">
                        <div className="item-top__content">
                            <p className="item-top__content-title">Payment information</p>
                            <span className="item-top__content-subtitle">Not connected</span>
                        </div>

                    </div>
                </div>
                <div className="item-bottom">
                    <button className="user-info__button">Connect</button>
                </div>
            </div>
            <div className="cabinet-block user-info__item">
                <div className="item-top">
                    <div className="item-top__image">
                        <img src={user} alt=""/>
                    </div>
                    <div className="item-top__info">
                        <div className="item-top__content">
                            <p className="item-top__content-title">Country</p>
                            <span className="item-top__content-subtitle">Russian Federation</span>
                        </div>
                        1
                    </div>
                </div>
                <div className="item-bottom">
                    <div className="item-bottom__content">
                        <p>The country was set automatically
                        </p>
                        <i>
                            <img src={info} alt=""/>
                        </i>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default UserInfo;