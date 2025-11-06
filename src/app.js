/*  ============================================================
    Mini project for Git conflict practice (pair work)
    ------------------------------------------------------------
    Both teammates MUST edit THE SAME LINE below (AUTHOR_NAME)
    on separate branches to provoke a merge conflict.
    ============================================================ */

const PROJECT_NAME = "Barban-Deprest-Git-CC1";

// ★ À MODIFIER PAR LES DEUX (VALEUR DIFFÉRENTE OBLIGATOIRE)
const AUTHOR_NAME = "Camille Deprest";

function buildBanner() {
    return `[${PROJECT_NAME}] by ${AUTHOR_NAME}`;
}

function main() {
    console.log(buildBanner());
}

main();
