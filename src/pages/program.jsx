import React from 'react';
import SEO from '../common/seo';
import Blog from '../components/program';
import Wrapper from '../layout/wrapper';

const index = () => {
    return (
        <Wrapper>
            <SEO pageTitle={"Program"} /> 
            <Blog />           
        </Wrapper>
    );
};

export default index;