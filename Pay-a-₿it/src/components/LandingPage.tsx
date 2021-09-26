import React from 'react';
import img1 from '../images/img1.jpg';
import img2 from '../images/img2.jpg';
import img3 from '../images/img3.jpeg';
import img4 from '../images/img4.jpeg';
import L_lab from '../images/L_lab.jpeg';

const LandingPage: React.FC = () => {
  return (
    <>
    
      <h1
        style={{
          marginTop: '30px',
          marginBottom: '50px',
          fontSize: '60px',
          fontWeight: '400',
          background: ' linear-gradient(to right, green, yellow)',
          WebkitTextFillColor: 'transparent',
          WebkitBackgroundClip: 'text',
          textAlign: 'center',
          
        }}
      >
        <strong>TRANSACTIONS FOR THE FUTURE</strong>
      </h1>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '30px',
          marginBottom: '30px',
          color: 'white',
          border: '10px solid white',
        }}
      >
        <img
          src={img1}
          style={{ width: '50vw', height: '70vh', marginRight: '30px' }}
        ></img>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '40vw',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <h1 style={{ color: 'linear-gradient(to right, red , yellow)' }}>
            Track balances
          </h1>
          <h4>Keep track of shared expenses, balances, and who owes who.</h4>
        </div>
      </div>
      <hr color="white" />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '30px',
          marginBottom: '30px',
          color: 'white',
          border: '10px solid white',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '40vw',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <h1>Organize expenses</h1>
          <h4>Split expenses with any group: trips, housemates, friends, and family.</h4>
        </div>
        <img
          src={img3}
          style={{ width: '50vw', height: '70vh', marginLeft: '30px' }}
        ></img>
      </div>
      <hr color="white" />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '30px',
          marginBottom: '30px',
          color: 'white',
          border: '10px solid white',
        }}
      >
        <img
          src={img2}
          style={{ width: '50vw', height: '70vh', marginRight: '30px' }}
        ></img>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '40vw',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <h1>Add expenses easily</h1>
          <h4>Quickly add expenses on the go before you forget who paid.</h4>
        </div>
      </div>
      <hr color="white" />
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: '30px',
          marginBottom: '30px',
          color: 'white',
          border: '10px solid white',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: '40vw',
            justifyContent: 'center',
            textAlign: 'center',
          }}
        >
          <h1>Pay friends back</h1>
          <h4>Settle up with a friend and experience the lightening payment.</h4>
        </div>
        <img
          src={img4}
          style={{ width: '50vw', height: '70vh', marginLeft: '30px' }}
        ></img>
      </div>
      <hr color="white" />
      <div style={{ color: 'white', marginBottom: '30px' }}>
        
        <h1 style={{textAlign: 'center'}}>FEATURES</h1>
        
          <h3>Instant Payments: </h3><p> Lightning-fast blockchain payments without worrying about
          block confirmation times. Security is enforced by blockchain smart-contracts
          without creating a on-blockchain transaction for individual payments. Payment
          speed measured in milliseconds to seconds.
        </p>
        
          <h3>Scalability: </h3><p> Capable of millions to billions of transactions per second across
          the network. Capacity blows away legacy payment rails by many orders of
          magnitude. Attaching payment per action/click is now possible without
          custodians.
        </p>
        
          <h3>Low Cost: </h3><p> By transacting and settling off-blockchain, the Lightning Network
          allows for exceptionally low fees, which allows for emerging use cases such as
          instant micropayments.
        </p>
        
          <h3>Cross Blockchains: </h3><p>Cross-chain atomic swaps can occur off-chain instantly with
          heterogeneous blockchain consensus rules. So long as the chains can support the
          same cryptographic hash function, it is possible to make transactions across
          blockchains without trust in 3rd party custodians.
        </p>
      </div>
      <hr color="white" />
      <div
          style={{
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            marginTop:'30px',
            justifyContent: 'center',
            alignItems:'center',
            textAlign: 'center',
            backgroundColor:'white'
          }}

        >
            <h1><strong>POWERED BY</strong></h1>
            <a href="https://lightning.engineering/" target='_blank'><img src={L_lab} width='500px' /></a>
        </div>
    </>
  );
};

export default LandingPage;
