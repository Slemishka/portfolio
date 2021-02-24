import React from 'react';

const RoundLink = props => {

    const styles = {
      backgroundColor: props.bcolor,
      borderRadius:'50%',
      width: '50px',
      height: '50px',
      display:'inline-flex',
      justifyContent:'center',
      alignItems:'center',
      color: 'white',
      margin: '0 10px'
    };

    return (
        <a href={props.href} target={'_blank'} rel="noreferrer" style={styles}>
            {props.icon}
        </a>
    );
};

export default RoundLink;
