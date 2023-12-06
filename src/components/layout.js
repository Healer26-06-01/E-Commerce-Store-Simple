import React from "react";

import { Outlet, Link } from "react-router-dom";

import { HomeIcon, CartIcon } from "./icons";
import Search from "./search";

const Layout = ({ categories }) => {
    const renderCategories = () => {
        return categories.data.map((c) => (
            <li key={c.id}>
                <Link to={`/categories/${c.id}`}>{c.title}</Link>
            </li>
        ));
    };

    return (
        <>
            <header>
                <div id="headerHomeIcon">
                    <Link to="/"><HomeIcon width={40} /></Link>
                </div>
                <Search />

                <div id="headerTitle">Cửa hàng của tôi</div>
                <div id="headerCartIcon">
                    <Link to="/basket"><CartIcon width={40} /></Link>
                </div>
            </header>
            <section>
                <nav>
                    {categories.errorMessage && (
                        <div>Lỗi: {categories.errorMessage}</div>
                    )}

                    <ul>{categories.data && renderCategories()}</ul>
                </nav>
                <main>
                    <Outlet />
                </main>
            </section>

            <footer>
                <Link to="/">Trang chủ</Link> | <Link to="/basket">Giỏ hàng</Link>
            </footer>
        </>
    );
};

export default Layout;
