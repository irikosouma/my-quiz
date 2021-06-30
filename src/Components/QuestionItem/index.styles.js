import styled from 'styled-components';
const Wrap = styled.div`
width: calc(100% - 100px);
padding: 50px;
max-width: 1170px;
position: relative;
background-color: ${(props) => props.isOpenResult === true ?  "rgba(0,0,0,.025)" : "none"};
    .total-correct-answer {
        text-align: right;
        color: #25bb32;
        text-transform: capitalize;
        font-size: 16px;
        line-height: 24px;
    }
    .question {
        font-size: 40px;
        line-height: 60px;
        font-weight: 700;
        color: #102a42;
        margin-top: 2rem;
        margin-bottom: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    .answer {
        background-color: #8bcbf9;
        width: 100%;
        max-width: 60%;
        display: block;
        margin: .75rem auto;
        padding: .5rem 5px;
        border-radius: 4px;
        appearance: none;
        font-size: 1rem;
        border: transparent;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all .2s linear;
        :hover {

            color: #fff;
            background-color: #54ACEC;
        }
    }
    .skip-question {
        min-width: 35%;
        display: block;
        margin-left: auto;
        border-radius: 3px;
        font-size: 16px;
        line-height: 24px;
        font-weight: 700;
        margin-top: 1.5rem;
        padding: .25rem 5rem;
        font-weight: 700;
        height: 30px;
        background-color: #ffb100;
        border: transparent;
        appearance: none;
        cursor: pointer;    
        transition: all .3s linear;
        :hover {
            background-color: #805900;
            color: #ffb100;
        }
    }
    
`;
// const WrapModal = styled.div`

// .modal {
//     width: 600px;
//     height: 300px;
//     background-color: #fff;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
//     position: absolute;
//     top: calc(100% - 600px) / 2;
//     left: calc(100% - 300px) / 2;
//         :focus {
//             background: rgba(0,0,0,.75);
//         }
//         .title {
//             font-size: 28px;
//             line-height: 28px;
//             font-weight: 700;
//             color: #102a42;
//         }
//         .close-btn {
//             position: absolute;
//             right: 20px;
//             top: 20px;
//             font-size: 36px;
//             fill: #bb2525;
//             :hover {
//                 color: #E66B6B;
//             }
//         }
//     }
// `;
export {Wrap}