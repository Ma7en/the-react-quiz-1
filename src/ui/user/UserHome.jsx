/* eslint-disable no-unused-vars */
import styled from "styled-components";
import quotes from "quotesy";
import { useUser } from "../../features/authentication/useUser";
import Row from "../Row";

const StyledUserAvatar = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: relative;
    gap: 1.2rem;
    font-weight: 500;
    font-size: 1.4rem;
    color: var(--color-grey-600);
    text-align: center;
    width: 100%;
    > div {
        width: 80%;
    }
`;

const Avatar = styled.img`
    display: block;
    width: 4rem * 2;
    width: 3.6rem * 2;
    max-width: 40%;
    aspect-ratio: 1;
    object-fit: cover;
    object-position: center;
    border-radius: 50%;
    outline: 2px solid var(--color-grey-100);
    position: relative;
    left: 50%;
    transform: translateX(-50%);
`;

const Name = styled.span`
    font-size: 5rem !important;
`;

const Blockquote = styled.blockquote`
    width: 100%;
    display: flex;
    flex-direction: column;
    row-gap: 1.4rem;
    text-align: center;
    font-size: 1.4rem;

    background-color: var(--color-grey-0);
    border: 1px solid var(--color-grey-100);
    border-radius: var(--border-radius-md);
    box-shadow: var(--shadow-lg);
    padding: 0.8rem 0.8rem;
    transition: all 0.5s;
`;

const Text = styled.h4`
    font-size: 2.4rem;
`;

const Cite = styled.cite`
    font-size: 1.6rem;
`;

function UserHome() {
    const { user } = useUser();
    // console.log(`user:- `, user);
    const { fullName, avatar } = user.user_metadata;

    // console.log(quotes.random());
    const { author, text } = quotes.random();

    return (
        <>
            <StyledUserAvatar>
                <Row>
                    <Avatar
                        src={avatar || "img/default-user.jpg"}
                        alt={`Avatar of ${fullName}`}
                    />
                    <Name>{fullName}</Name>
                </Row>

                <Row>
                    <Blockquote>
                        <Text>{text}</Text>
                        <Cite>-{author}</Cite>
                    </Blockquote>
                </Row>
            </StyledUserAvatar>
        </>
    );
}

export default UserHome;
