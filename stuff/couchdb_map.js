function ( document ) {
    if ( document[ "c|í|m" ] === "Dokumentum-orient|á|lt adatb|á|zisok" ) {
        emit(null, {
            "c|í|m": document[ "c|í|m" ],
            "c|í|mk|é|k": document[ "c|í|mk|é|k" ],
            "l|é|trehozva": document[ "l|é|trehozva" ],
            "tartalom": document[ "tartalom" ]
            "kommentek": document[ "kommentek" ]
        });
    }
}
