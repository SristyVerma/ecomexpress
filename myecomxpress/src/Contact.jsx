import React from 'react'
import styled from 'styled-components';
const Contact = () => {
    const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;
    .container {
      margin-top: 6rem;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;
  return (
    <Wrapper>
        <h2 className='common-heading'>Contact Us</h2>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3635675.594019364!2d80.8833819!3d27.1416735!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sin!4v1673882277782!5m2!1sen!2sin" width="80%" height="300" style={{border:0}}allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title={Date.now}></iframe>
        <div className="container">
            <div className='contact-form'>
                <form className='contact-inputs' action='https://formspree.io/f/mwkjplbe' method="POST">
                    <input type="text" placeholder='Enter username' 
                    name='username' required autoComplete='off'/>
                    <input type='email' placeholder='Enter email'
                    name='email' required autoComplete='off'/>
                <textarea name='message' placeholder='Enter message' cols="30" rows='10' required autoComplete='off'>

                </textarea>
                <input type='submit' />
                
                </form>
            </div>

        </div>
    </Wrapper>
  )
}

export default Contact