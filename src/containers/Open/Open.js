import React, {useEffect} from 'react';
import { connect } from "react-redux"
import {setWalletJSon} from "../../state/wallet/actions";
import {useHistory, useParams} from "react-router-dom"

function Container(props) {
    const history = useHistory()
    const {json} = useParams()

    useEffect(() => {
        if(json) {
            const decodedJson = JSON.parse(decodeURIComponent(json))
            console.log("decoded json", decodedJson, decodedJson.address)
            if(decodedJson.address) {
                props.setWalletJSon(JSON.stringify(decodedJson))
                history.push("/loadWallet")
            } else {
                history.push("/")
            }
        }
    }, [])


    return null
}

const mapStateToProps = (state, ownProps) => {

    return {
    }
}

const mapDispatchToProps = {
    setWalletJSon: setWalletJSon,
}

export const OpenContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Container)
