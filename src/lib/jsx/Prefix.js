import React from 'react'
import { PrefixButton, Symbols, Panels } from '.'
//import * as SNAC from '../snac/snac'
import SNAC from '../snac'

const Prefix = props =>
    <>
        {props.prefixEnabled ? (
            <>
                {props.twoLines && props.path.length > 1 &&
                    <>
                        <PrefixButton
                            openTag={false}
                            writeable={props.writeable} />

                        <Panels.Prefix>
                            {SNAC.getPrefixString(
                                [...props.prefixArray, true],
                                Symbols.PrefixOff,
                                Symbols.PrefixOn
                            )}
                        </Panels.Prefix>
                        <Panels.NewLine />
                    </>
                }
                <PrefixButton
                    path={props.path}
                    data={props.data}
                    prefix={props.prefix}
                    openTag={props.openTag}
                    writeable={props.writeable}
                    setEditor={props.setEditor}
                    setSelected={props.setSelected}
                />
                <Panels.Prefix>
                    {SNAC.getPrefixString(
                        props.prefixArray,
                        Symbols.PrefixOff,
                        Symbols.PrefixOn
                    )}
                </Panels.Prefix>
            </>
        ) :
            <Panels.Prefix>
                {SNAC.makeSpacing(
                    props.spacing - 1,
                    Symbols.PrefixOff
                )}
            </Panels.Prefix>
        }
    </>

export default Prefix