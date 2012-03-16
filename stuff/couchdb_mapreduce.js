function (document) {
    document[ "kommentek" ] && 
        document[ "kommentek" ].forEach(function ( komment ) {
            emit( komment[ "felhaszn|á|l|ó|" ][ "n|é|v" ], 1 );
        });
}

function ( nev, kommentSzam ){
    return {
            "felhaszn|á|l|ó|n|é|v": nev,
            "|ö|sszes": sum( kommentSzam )
           }
}
