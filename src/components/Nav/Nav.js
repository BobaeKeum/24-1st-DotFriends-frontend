import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Category from './Category';
import './Nav.scss';

class Nav extends Component {
  render() {
    return (
      <header className="nav">
        <div className="topWrapper">
          <div className="naverMenu">
            <div className="leftMenu">
              <a
                href="https://www.naver.com/"
                alt="naver"
                className="naverLogo"
              >
                naver
              </a>
              <span className="shopping">
                <i className="fas fa-shopping-bag" />
                네이버 쇼핑
              </span>
            </div>
            <div className="rightMenu">
              <button className="login">로그인</button>
              <button className="service">
                <i className="fas fa-th" />
              </button>
            </div>
          </div>
        </div>

        <div className="headerMenu">
          <button className="likedBtn">
            <i className="fas fa-plus" />
            찜하기 181,685
          </button>
          <h1 className="mainLogo">
            <Link to="/">DOT FRIENDS</Link>
          </h1>
          <form className="searchForm">
            <input
              type="text"
              className="search"
              placeholder="검색어를 입력해보세요"
            />
            <button className="searchBtn">
              <i className="fas fa-search" />
            </button>
          </form>
        </div>
        <nav className="categoriesContainer">
          <div className="categoriesWrapper">
            <ul className="categories">
              {MENULIST.map(category => (
                <Category category={category} />
              ))}
            </ul>
            <button>더보기</button>
          </div>
        </nav>
      </header>
    );
  }
}

export default Nav;

const MENULIST = [
  {
    id: 1,
    title: '캐릭터',
    subCategory: ['브라운앤프렌즈', 'BT21', '브롤스타즈'],
  },
  {
    id: 2,
    title: 'NEW',
  },
  {
    id: 3,
    title: 'SALE',
  },
  {
    id: 4,
    title: 'COLLABS',
    subCategory: ['MINIONS', 'Masion Kisune', 'CASETiFY'],
  },
  {
    id: 5,
    title: '토이',
    subCategory: ['중대형인형', '미니인형', '키링', '쿠션,방석', '피규어'],
  },
  {
    id: 6,
    title: '문구',
    subCategory: [
      '다이어리,플래너',
      '노트,메모지',
      '필기구,필통',
      '스티커',
      '마그넷',
    ],
  },
  {
    id: 7,
    title: '디지털',
    subCategory: ['폰케이스', '디지털케이스', '소형가전', '주변기기'],
  },
  {
    id: 8,
    title: '의류',
    subCategory: ['반팔의류', '긴팔의류', '파자마', '양말,슬리퍼'],
  },
  {
    id: 9,
    title: '패션잡화',
    subCategory: ['가방', '지갑,파우치', '뷰티', '패션소품', '위생용품'],
  },
  {
    id: 10,
    title: '리빙&레저',
    subCategory: [
      '패브릭,홈데코',
      '컵,텀블러',
      '주방,욕실',
      '캠핑',
      '골프',
      '식품',
    ],
  },
  {
    id: 11,
    title: '키즈',
    subCategory: ['의류', '패션잡화', '양말,슬리퍼'],
  },
  {
    id: 12,
    title: '전체상품',
  },
];
