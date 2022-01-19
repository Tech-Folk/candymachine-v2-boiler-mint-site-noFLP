import "./Mint.css"

const Mint = () => {
    return (
        <page>
            <hd>
                <hdfont>Tech Folk</hdfont>
                <psfont>Presale</psfont>
            </hd>
            <container>
                    <dfont style = {{marginTop : 30 }}>
                    We recommend minting at least 3 Tech folk player cards to help you level up quickly in  the game. That said, you’ll only have to mint one to start playing.
                    </dfont>
                    <mbutton>Mint</mbutton>
                    <subfont>Mint info</subfont>
                    <pfont style = {{marginTop : 30}}>Cost of each Tech Folk Nft </pfont>
                    <dfont>.375 Sol </dfont>
                    <pfont>Folks still available to mint</pfont>
                    <dfont>itemsAvailable</dfont>
                    <pfont>Total count you have purchased</pfont>
                    <dfont>itemsRedeemed</dfont>
                    <pfont>Total balance of Sol in your wallet</pfont>
                    <dfont>Dynamic Quantity</dfont>
            </container>
        </page>
    )
}

export default Mint
