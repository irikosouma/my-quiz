import styled from 'styled-components';
const WrapMain = styled.div`
width: 90vw;
max-width: 1170px;
/* height: 100vh; */
/* display: flex;
align-items: center;
justify-content: center; */
/* margin: 4rem auto; */
/* overflow: auto; */
/* padding: 3rem; */
background: ${(props) => props.isOpenResult === true ?  "rgba(0,0,0,.025)" : "none"};
/*.wrap-quiz {
    
    max-width: 500px;
    background-color: #fff;
    padding: 50px;
    overflow: hidden;
    .title {
        color: #102a42;
        font-size: 40px;
        line-height: 40px;
        font-weight: 700;
        margin-bottom: 35px;
    }
    .small-title {
        color: #324d67;
        font-size: 16px;
        line-height: 24px;
        font-weight: 500;
        margin-bottom: 10px;
        width: 100% ;
        
    }
    input[type=number], & #category {
        width: 100%;
        height: fit-content;
        border-radius: 3px;
        padding: 2px 5px;
        border: none;
        margin-bottom: 35px;
        font-size: 16px;
        line-height: 24px;
        background-color: #f1f5f8;

    }
    input[type=number] {
        width: calc(100% - 10px);
    }
    .btn-start-quiz {
        font-size: 16px;
        color: #222222;
        background-color: #ffb100;
        font-weight: 700;
        width: 100% ;
        height: fit-content;
        padding: 6px 0;
        cursor: pointer;
        border-radius: 3px;
        appearance: none;
        border: none;
        letter-spacing: 2px;
    }
}
.wrap-answer {
    max-width: 1170px;
    background-color: #fff;
    overflow: hidden;
}
.wrap-modal {
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.75);
    position: absolute;
.modal {
    border-radius: 3px;
    width: 90vw;
    position: absolute;
    top: calc(50% - 130px);
    left: calc(50% - 300px);
    max-width: 600px;
    height: 150px;
    padding: 50px 0;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
        :focus {
            background: rgba(0,0,0,.75);
        }
        .title {
            font-size: 40px;
            line-height: 40px;
            font-weight: 700;
            color: #102a42;
            margin: 0;
            padding-bottom: 12px;
        }
        .percent {
            margin: 0;
            color: #324d67;
            font-size: 24px;
            line-height: 36px;
            padding-bottom: 36px;
        }
        .close-btn {

            font-weight: 700;
            color: #222222;
            font-size: 16px;
            min-width: 35%;
            display: block;
            margin: 0 auto;
            border-radius: 3px;
            font-size: 16px;
            line-height: 24px;
            font-weight: 700;
            padding: .25rem 5rem;
            font-weight: 700;
            height: 30px;
            background-color: #ffb100;
            border: transparent;
            appearance: none;
            cursor: pointer;    
            transition: all .3s linear;
        }
    }
} */
@media only screen and (min-width: 50px) {
    width: 90vw;
    max-width: 1170px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    background: ${(props) => props.isOpenResult === true ?  "rgba(0,0,0,.025)" : "none"};
    .wrap-quiz {
        width: 90vw;
        max-width: 400px;
        background-color: #fff;
        padding: 3rem;
        margin: 4rem auto; 
        .title {
            color: #102a42;
            font-size: 40px;
            line-height: 40px;
            font-weight: 700;
            margin-bottom: 35px;
            letter-spacing: 1px;
        }
        .small-title {
            color: #324d67;
            font-size: 16px;
            line-height: 24px;
            font-weight: 500;
            margin-bottom: 10px;
            width: 100% ;
            
        }
        input[type=number], & #category {
            width: 100%;
            height: fit-content;
            border-radius: 3px;
            padding: 2px 5px;
            border: none;
            margin-bottom: 35px;
            font-size: 16px;
            line-height: 24px;
            background-color: #f1f5f8;

        }
        input[type=number] {
            width: calc(100% - 10px);
        }
        .btn-start-quiz {
            font-size: 16px;
            color: #222222;
            background-color: #ffb100;
            font-weight: 700;
            width: 100% ;
            height: fit-content;
            padding: 6px 0;
            cursor: pointer;
            border-radius: 3px;
            appearance: none;
            border: none;
            letter-spacing: 2px;
        }
        .error-api {
            color: #bb2525;
            margin: 0 0 35px 0;
            font-size: 15px;
            line-height: 24px;
        }
    }
    .wrap-answer {
        max-width: 1170px;
        background-color: #fff;
        /* padding: 50px; */
        overflow: hidden;
    }
    .wrap-modal {
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,.75);
        position: absolute;
    .modal {
        border-radius: 3px;
        width: 90vw;
        position: absolute;
        top: calc(50% - 130px);
        left: calc(50% - 300px);
        max-width: 600px;
        height: 150px;
        padding: 50px 0;
        background-color: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
            :focus {
                background: rgba(0,0,0,.75);
            }
            .title {
                font-size: 40px;
                line-height: 40px;
                font-weight: 700;
                color: #102a42;
                margin: 0;
                padding-bottom: 12px;
            }
            .percent {
                margin: 0;
                color: #324d67;
                font-size: 24px;
                line-height: 36px;
                padding-bottom: 36px;
            }
            .close-btn {

                font-weight: 700;
                color: #222222;
                font-size: 16px;
                min-width: 35%;
                display: block;
                margin: 0 auto;
                border-radius: 3px;
                font-size: 16px;
                line-height: 24px;
                font-weight: 700;
                padding: .25rem 5rem;
                font-weight: 700;
                height: 30px;
                background-color: #ffb100;
                border: transparent;
                appearance: none;
                cursor: pointer;    
                transition: all .3s linear;
            }
        }
    }
}
`;


export {WrapMain}