let __format__ = "";

const x =
{
    "clrAndMsg": (msg) => {term.clr(); term.msg(msg)},
    "openGitHub": () => website.open("https://github.com/AzareelJames/"),
    "msgf": (msg) => {term.clr(); term.msg(__format__ + Str(msg)); __format__ = __format__ + Str(msg)},
    "randBinary": () => {
    let binary = "";

    repeat(Arithmetic.rand(1, 15), () => {
        binary += Str(Arithmetic.round(Arithmetic.rand()));
    });

    return binary;
    },
    "checkForUpdates": async function(){
    term.info("EGS System: Checking for updates...");

    try{
        const res = await getResponse("https://azareeljames.github.io/EngineScript/version.txt");
        const version = await res.text();
        const currentVersion = "1.1.0 fixed\n";

        if(version === currentVersion){
        term.info("Your EGS Version is up to date. Version: ", currentVersion);
        } else{
        term.war(`EGS Update Found:\nplease update to ${version} from ${currentVersion}`);
        }
    } catch{
        term.er("EGS System: Cannot check for updates.");
    }
    }
}

x;