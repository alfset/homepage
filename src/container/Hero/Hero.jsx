import React from 'react';
import { images } from '../../constants';
import { IconScroll } from '../../components';
import Card from 'react-bootstrap/Card';
import './Hero.css';

const logos = ["logo01", "logo02", "logo03", "logo04", "logo05", "logo06"];

const Hero = () => {
  const stats = {
    assetsStaked: '100,000 $',
    totalNodes: 6,
    totalDelegators: 150,
  };

  return (
    <div className="hero">
      <div className="row align-items-center">
        <div className="col-md-6 col-12">
          <h1 className="title">Stake, Earn, And Learn about Blockchain Project with us</h1>
        </div>
        <div className="col-md-6 col-12">
          {/* Apply the custom class to the Card */}
          <Card className="green-card">
            <Card.Body>
              <Card.Title>Staking Stats</Card.Title>
              <Card.Text>
                <strong>Assets Staked:</strong> {stats.assetsStaked}
              </Card.Text>
              <Card.Text>
                <strong>Total Nodes Supported:</strong> {stats.totalNodes}
              </Card.Text>
              <Card.Text>
                <strong>Total Delegators:</strong> {stats.totalDelegators}
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>

      <div className="clients">
        {logos.map((logo, index) => (
          <img key={index} src={images[logo]} alt={images[logo]} />
        ))}
      </div>
      <IconScroll />
    </div>
  );
}

export default Hero;
