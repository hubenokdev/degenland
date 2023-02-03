import React from 'react';

import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import LinearProgress from '@mui/material/LinearProgress';
import HandshakeIcon from '@mui/icons-material/Handshake';

import * as env from "../../../env";

const MAIN_COLOR = '#ffc0ff';
const BUTTON_COLOR = '#fb497e';
const TITLE_COLOR = '#8b1832';

function InviteOfferDlg({
    myInfo,
    inviteInfo,
    DEGENLAND_IMG_URL,
    TYCOON_IMG_URL,
    MOGUL_IMG_URL,
    INVESTOR_IMG_URL,
    onClickAcceptBtn,
    onClickDeclineBtn
}) {
    console.log(myInfo);
    console.log(inviteInfo);

    return (
        <div
            style={{
                backgroundColor: '#ffc0ff',
                width: '480px',
                padding: '15px',
                overflow: 'hidden'
            }}>
            {/* account info */}
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                margin: '20px 0 20px 20px',
                position: 'relative',
            }}>
                <Badge
                    overlap='circular'
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant='dot'
                    sx={{
                        '& .MuiBadge-badge': {
                            width: '32px',
                            height: '32px',
                            borderRadius: '16px',
                            margin: '3px',
                            backgroundColor: `${myInfo.connectState ? '#44b700' : 'grey'}`,
                            color: `${myInfo.connectState ? '#44b700' : 'grey'}`,
                            '&::after': {
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                borderRadius: '50%',
                                animation: `${myInfo.connectState ? 'ripple 1.2s infinite ease-in-out' : 'none'}`,
                                border: '1px solid currentColor',
                                content: '""',
                            },
                        },
                        '@keyframes ripple': {
                            '0%': {
                                transform: 'scale(.8)',
                                opacity: 1,
                            },
                            '100%': {
                                transform: 'scale(2.4)',
                                opacity: 0,
                            },
                        },
                    }}
                >
                    <Avatar alt={myInfo.playerId} src={env.SERVER_URL + myInfo.avatarUrl}
                        sx={{
                            width: 128,
                            height: 128,
                            fontSize: '64px',
                            backgroundColor: '#e0e0e0',
                            border: '2px solid white'
                        }} />
                </Badge>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: '20px'
                }}>
                    <p style={{
                        margin: '0',
                        fontSize: '24px',
                        fontWeight: '700',
                        color: '#873135'
                    }}>
                        {myInfo.playerId}
                    </p>
                    <LinearProgress variant='determinate' value={(myInfo.currentLevelScore / myInfo.targetLevelScore) * 100} />
                    <p style={{
                        margin: '0',
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#1976d2',
                        marginBottom: '5px'
                    }}>
                        Level : {myInfo.level}
                    </p>
                </div>
            </div>
            <div
                style={{
                    width: '100%',
                    height: '2px',
                    backgroundColor: `${TITLE_COLOR}`,
                    position: 'relative'
                }}
            >
                <HandshakeIcon style={{
                    color: 'white',
                    backgroundColor: `${TITLE_COLOR}`,
                    width: '42px',
                    height: '42px',
                    borderRadius: '21px',
                    padding: '2px',
                    position: 'absolute',
                    top: '-20px',
                    left: 'calc(50% - 21px)'
                }} />
            </div>
            {/* account info */}
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                margin: '20px 0 20px 20px',
                position: 'relative'
            }}>
                <Badge
                    overlap='circular'
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                    variant='dot'
                    sx={{
                        '& .MuiBadge-badge': {
                            width: '32px',
                            height: '32px',
                            borderRadius: '16px',
                            margin: '3px',
                            backgroundColor: `${inviteInfo.playerInfo.connectState ? '#44b700' : 'grey'}`,
                            color: `${inviteInfo.playerInfo.connectState ? '#44b700' : 'grey'}`,
                            '&::after': {
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                borderRadius: '50%',
                                animation: `${inviteInfo.playerInfo.connectState ? 'ripple 1.2s infinite ease-in-out' : 'none'}`,
                                border: '1px solid currentColor',
                                content: '""',
                            },
                        },
                        '@keyframes ripple': {
                            '0%': {
                                transform: 'scale(.8)',
                                opacity: 1,
                            },
                            '100%': {
                                transform: 'scale(2.4)',
                                opacity: 0,
                            },
                        },
                    }}
                >
                    <Avatar alt={inviteInfo.playerInfo.playerId} src={env.SERVER_URL + inviteInfo.playerInfo.avatarUrl}
                        sx={{
                            width: 128,
                            height: 128,
                            fontSize: '64px',
                            backgroundColor: '#e0e0e0',
                            border: '2px solid white'
                        }} />
                </Badge>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginLeft: '20px'
                }}>
                    <p style={{
                        margin: '0',
                        fontSize: '24px',
                        fontWeight: '700',
                        color: '#873135'
                    }}>
                        {inviteInfo.playerInfo.playerId}
                    </p>
                    <LinearProgress variant='determinate' value={inviteInfo.playerInfo.lvlProcess} />
                    <p style={{
                        margin: '0',
                        fontSize: '18px',
                        fontWeight: '700',
                        color: '#1976d2',
                        marginBottom: '5px'
                    }}>
                        Level : {inviteInfo.playerInfo.playerLvl}
                    </p>
                </div>
            </div>
            {/* nfts */}
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <div style={{
                    width: '450px',
                    heigh: '110px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <div style={{
                        width: '215px',
                        heigh: '100px',
                        margin: '0 5px',
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <img alt='...' src={DEGENLAND_IMG_URL}
                            style={{
                                margin: '5px',
                                width: '100px',
                                height: '100px',
                                border: '2px solid #873135',
                                borderRadius: '5px'
                            }} />
                        <div>
                            <p style={{
                                color: '#873135',
                                fontWeight: '700',
                                margin: '0 0 0 5px',
                                padding: '10px 0 5px 0',
                                borderBottom: '2px solid #873135'
                            }}>
                                Degen
                            </p>
                            <p style={{
                                fontSize: '20px',
                                color: '#2b3283',
                                fontWeight: '700',
                                margin: '5px 0 0 5px'
                            }}>
                                {inviteInfo.playerInfo.degenlandNftCount}
                            </p>
                        </div>
                    </div >
                    <div style={{
                        width: '215px',
                        heigh: '100px',
                        margin: '0 5px',
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <img alt='...' src={TYCOON_IMG_URL}
                            style={{
                                margin: '5px',
                                width: '100px',
                                height: '100px',
                                border: '2px solid #873135',
                                borderRadius: '5px'
                            }} />
                        <div>
                            <p style={{
                                color: '#873135',
                                fontWeight: '700',
                                margin: '0 0 0 5px',
                                padding: '10px 0 5px 0',
                                borderBottom: '2px solid #873135'
                            }}>
                                Tycoon
                            </p>
                            <p style={{
                                fontSize: '20px',
                                color: '#2b3283',
                                fontWeight: '700',
                                margin: '5px 0 0 5px'
                            }}>
                                {inviteInfo.playerInfo.tycoonNftCount}
                            </p>
                        </div>
                    </div >
                </div>
                <div style={{
                    width: '450px',
                    heigh: '110px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <div style={{
                        width: '215px',
                        heigh: '100px',
                        margin: '0 5px',
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <img alt='...' src={MOGUL_IMG_URL}
                            style={{
                                margin: '5px',
                                width: '100px',
                                height: '100px',
                                border: '2px solid #873135',
                                borderRadius: '5px'
                            }} />
                        <div>
                            <p style={{
                                color: '#873135',
                                fontWeight: '700',
                                margin: '0 0 0 5px',
                                padding: '10px 0 5px 0',
                                borderBottom: '2px solid #873135'
                            }}>
                                Mogul
                            </p>
                            <p style={{
                                fontSize: '20px',
                                color: '#2b3283',
                                fontWeight: '700',
                                margin: '5px 0 0 5px'
                            }}>
                                {inviteInfo.playerInfo.mogulNftCount}
                            </p>
                        </div>
                    </div >
                    <div style={{
                        width: '215px',
                        heigh: '100px',
                        margin: '0 5px',
                        display: 'flex',
                        flexDirection: 'row'
                    }}>
                        <img alt='...' src={INVESTOR_IMG_URL}
                            style={{
                                margin: '5px',
                                width: '100px',
                                height: '100px',
                                border: '2px solid #873135',
                                borderRadius: '5px'
                            }} />
                        <div>
                            <p style={{
                                color: '#873135',
                                fontWeight: '700',
                                margin: '0 0 0 5px',
                                padding: '10px 0 5px 0',
                                borderBottom: '2px solid #873135'
                            }}>
                                Investor
                            </p>
                            <p style={{
                                fontSize: '20px',
                                color: '#2b3283',
                                fontWeight: '700',
                                margin: '5px 0 0 5px'
                            }}>
                                {inviteInfo.playerInfo.investorNftCount}
                            </p>
                        </div>
                    </div >
                </div>
            </div>
            {/* buttons */}
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'right',
                margin: '20px 0',
                width: '100%',
                padding: '0 20px'
            }}>
                <Button onClick={onClickAcceptBtn}
                    sx={{
                        height: '42px',
                        borderRadius: '21px',
                        textTransform: 'none',
                        fontSize: 16,
                        fontWeight: 700,
                        color: 'white',
                        padding: '0 25px',
                        backgroundColor: '#e74895',
                        marginRight: '20px',
                        '&:hover': {
                            backgroundColor: 'grey',
                            boxShadow: 'none',
                        },
                        '&:focus': {
                            outline: 'none',
                            boxShadow: 'none',
                        }
                    }}>
                    Accept
                </Button>
                <Button onClick={onClickDeclineBtn}
                    variant='outlined'
                    sx={{
                        height: '42px',
                        borderRadius: '21px',
                        textTransform: 'none',
                        fontSize: 16,
                        fontWeight: 700,
                        color: '#e74895',
                        padding: '0 25px',
                        border: '3px solid #e74895',
                        '&:hover': {
                            backgroundColor: 'grey',
                            border: '3px solid grey',
                            color: 'white',
                            boxShadow: 'none',
                        },
                        '&:focus': {
                            outline: 'none',
                            boxShadow: 'none',
                        }
                    }}>
                    Decline
                </Button>
            </div>
        </div >
    );
}

export default InviteOfferDlg;