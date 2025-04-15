import React from 'react';

const Task = () => {
  return (
    <div className="  container">
      <section className="header1">
        <h2>
          <span className="choose">Choose us</span>{' '}
          <span className="together">...Let's work together</span>
        </h2>
        <div className="definitions">
          <p><strong>vintage</strong> <em>adj_</em>  of old, recognized and enduring interest, importance or quality: classic</p>
          <p><strong>hippo</strong> <em>n_</em> meaning versatile, strong, friendly, assertive, caring, quirky and supportive</p>
        </div>
      </section>

      <section className="why-cards">
        <div className="card orange">
          <img  className="img1"src="https://img.icons8.com/color/96/000000/conference-call.png" alt="Unique" />
          <h3>Why <span>We’re unique</span></h3>
          <p>We believe in support, customer service and being available 24/7. We provide our clients with the best service and care.</p>
        </div>

        <div className="card green">
          <img className="img2" src="https://img.icons8.com/color/96/000000/like.png" alt="Traditional" />
          <h3>Why <span>We’re traditional</span></h3>
          <p>Our values are traditional, but our approach is not. We enjoy the work and the people we do it with and for.</p>
        </div>

        <div className="card red">
          <img className='img3' src="https://img.icons8.com/color/96/000000/conference-call.png" alt="Special" />
          <h3>Why <span>We’re special</span></h3>
          <p>We enjoy what we do and who we do it with! Our passion is very apparent. Get in touch... you’ll see the difference.</p>
        </div>
      </section>

      <div className="buttons">
        <button className="btn dark">LEARN MORE</button>
        <button className="btn yellow">CONTACT US</button>
      </div>

      <section className="golden-rule">
        <div className="heart">❤️</div>
        <h2>We live and work by the <span>GOLDEN RULE</span></h2>
        <p>“Do unto others as you would have them do unto you”</p>
        <hr />
      </section>

      <section className="who-we-are">
        <h2><span className="we-are">We are</span> Frequent Research</h2>
        <div className="who-cards">
          <div className="card card orange">
            <img src="https://img.icons8.com/color/96/000000/teamwork.png" alt="Dedicated" />
            <h3>We are group of...<span>dedicated, creative people</span></h3>
            
            <p>We love print. We love graphics and design. We love our team. Come check us out.</p>
          </div>

          <div className="card card green">
            <img src="https://img.icons8.com/color/96/000000/handshake.png" alt="Bread & Butter" />
            <h3>Our <span>bread & butter</span></h3>
            <p>Trusted long-lasting relationships are our foundation. We value clients, vendors, friends & family.</p>
          </div>

          <div className="card card red">
            <img src="https://img.icons8.com/color/96/000000/idea.png" alt="Let's Talk" />
            <h3>Got an idea <span> Let’s talk</span></h3>
            <p>We listen. Run your ideas by us and we’ll give our honest opinion. Call, email or text.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Task;
