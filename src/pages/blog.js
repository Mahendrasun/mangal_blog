import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
// import { blogList } from '../../config/data';
// import Chip from '../../components/common/Chip';
// import EmptyList from '../../components/common/EmptyList';
// import './styles.css';
import { Link } from 'react-router-dom';

// ProductDetails.js
const Blog = () => {
  const { id } = useParams();
  // const {id} = params
  console.log(id);
  
  const [blog, setBlog] = useState(null);

  // useEffect(() => {
  //   let blog = blogList.find((blog) => blog.id === parseInt(id));
  //   if (blog) {
  //     setBlog(blog);
  //   }
  // }, []);
console.log(useParams());
  return (
    <>
      <Link className='blog-goBack' to='/'>
        <span> &#8592;</span> <span>Go Back</span>
      </Link>
      
    </>
  );
   };
   
   export default Blog;