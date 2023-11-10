import { useState } from 'react';
const Services = () => {
  const [ message, setMessage ] = useState(null);
  const handleClick = ()=>{
    setMessage('Welcome :) We will contact you with the relavant details.')
    setTimeout(()=>{
      setMessage(null);
    },3000)
  }
  return (
    <div className="services-container">
      {/* <h1>Our Fitness Services</h1> */}

      {/* Service 1 */}
      <div className="service service1">
        
        <div className="service-info">
        <h2>Personal Training</h2>
          <p>
            Our certified personal trainers are dedicated to helping you reach your fitness goals. With personalized workout plans and one-on-one coaching, you'll achieve results faster.
          </p>
          <p>
            1.<strong> Personalized Training Plans:</strong>  At our fitness center, we believe that one size doesn't fit all when it comes to fitness. Our certified personal trainers are here to create personalized workout plans tailored to your specific goals and fitness level. Whether you're looking to lose weight, build muscle, or improve your overall health, our trainers will design a program that works just for you.
          </p>
          <p>
            2.<strong>One-on-One Coaching: </strong> With our personal training sessions, you'll receive one-on-one coaching and guidance from our experienced trainers. They'll be by your side every step of the way, ensuring you perform exercises with proper form and technique to maximize results and prevent injuries. You'll have a fitness expert dedicated to your success.
          </p>
          <p>
          <strong>Achieve Your Best Self:</strong>  Whether you're just starting your fitness journey or looking to take your workouts to the next level, our personal training programs are designed to help you achieve your best self. Get started today and unlock your full potential with the guidance of our dedicated trainers.
          </p>
        </div>
        <img src="/images/personalTrainer.jpg" alt="Personal Training" />
      </div>

      {/* Service 2 */}
      <div className="service">
        <div className="service-info">
          <h2>Group Fitness Classes</h2>
          <p>
            Join our dynamic group fitness classes led by experienced instructors. From high-intensity workouts to yoga and pilates, we offer a variety of classes suitable for all fitness levels.
          </p>
          <p>
            1.<strong>Join Our Dynamic Classes:</strong> Welcome to our dynamic group fitness classes designed to inspire and empower you on your fitness journey. Whether you're a beginner or an experienced fitness enthusiast, our diverse range of classes caters to all fitness levels. Join us and experience the energy and camaraderie of group workouts.
          </p>
          <p>
            2.<strong>Experienced Instructors:</strong>Our classes are led by experienced and certified fitness instructors who are passionate about helping you achieve your fitness goals. They bring their expertise and enthusiasm to every class, ensuring you have a safe and effective workout experience.
          </p>
          <p>
            Achieve Your Fitness Goals: Whether you're looking to lose weight, increase strength, enhance flexibility, or simply improve your overall well-being, our group fitness classes can help you achieve your fitness goals. Start your fitness journey with us today!
          </p>
        </div>
        <img src="/images/groupClassesGym.jpg" alt="Group Fitness Classes" />
      </div>

      {/* Service 3 */}
      <div className="service">
        <div className="service-info">
          <h2>Nutrition Counseling</h2>
          <p>
            Achieve a balanced and healthy lifestyle with the guidance of our nutrition experts. Learn about proper nutrition, meal planning, and dietary strategies to complement your fitness routine.
          </p>
          <p>
            1.<strong>Achieve a Balanced Lifestyle:</strong>At Triple 3, we understand that achieving your fitness goals isn't just about exercise; it's also about proper nutrition. Our nutrition counseling services are designed to help you achieve a balanced and healthy lifestyle.
          </p>
          <p>
            2.<strong>Expert Nutrition Guidance:</strong>Our team of experienced and certified nutrition experts is dedicated to providing you with personalized nutrition guidance. We'll work closely with you to create a customized nutrition plan tailored to your unique needs and goals.
          </p>
          <p>
           <strong>Start Your Journey:</strong>If you're ready to enhance your fitness journey with personalized nutrition guidance, our nutrition counseling services are here to support you. Start your journey toward better health and nutrition with us today!
          </p>
        </div>
        <img src="/images/nutritionGym.jpg" alt="Nutrition Counseling" />
      </div>

      {/* Additional Services */}
      {/* Add more services here with descriptions and images */}

      {/* Testimonials */}
      <div className="other">
      <div className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <p>"I've never felt better! The personal training sessions are top-notch."</p>
          <p>- Sarah M.</p>
        </div>
        <div className="testimonial">
          <p>"The group fitness classes are fun, and I've seen amazing results!"</p>
          <p>- John D.</p>
        </div>
      </div>

      {/* Contact Information */}
      <div className="contact-info">
        <h2>Contact Us</h2>
        <p>Email: info@triple3.com</p>
        <p>Phone: +254 792-454-039</p>
      </div>

      {/* Call to Action */}
      <div className="cta">
        <h2>Ready to Get Started?</h2>
        <button onClick={handleClick}>Contact Us</button>
        {message && <p className="message">{message}</p> }
      </div>

      </div>
      
    </div>
  );
};

export default Services;
