import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout/Layout'
import Body from '../images/body.jpg';
import Headjoint from '../images/download.png';

import './brands.css'

export default function ProductList() {
    return (
        <Layout>
            <div className="brands m-0 w-auto">
                <div className="grid justify-center brands_container">
                        <div className="brands_header">
                            <h1 className="text-2xl mb-4 grid justify-center">Products</h1>
                        </div>
                        <div className="">
                            <Link to='/miyazawa'><img className="border border-gray-300 mt-4 mb-4 w-64 h-64" src={Body}/>Body</Link>
                        </div>
                        <div className="">
                            <Link to='/murumatsu'><img className="border border-gray-300 mt-4 mb-4 w-64 h-64" src={Headjoint}/>Headjoint</Link >
                        </div>
                </div>
            </div>
        </Layout>
    )
}