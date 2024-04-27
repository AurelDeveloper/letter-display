import { fetch } from '../../utils/fetcher';
import { globalState, extract } from '../../utils/processor';
import { uploader } from '../../utils/uploader';

async function controller() {

    const emailContent = await fetch();

    if (emailContent) {
        await extract();

        if (globalState.postGlobal) {
            await uploader(globalState.postGlobal);

            globalState.postGlobal = null;
        }
    }

}

export { controller };
