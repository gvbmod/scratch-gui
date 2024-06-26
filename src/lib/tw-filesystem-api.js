const available = () => !!window.showSaveFilePicker;

const showSaveFilePicker = fileName => window.showSaveFilePicker({
    suggestedName: fileName,
    types: [
		{
            description: 'Gvbvdxx Mod 2 - Recent Project',
            accept: {
                'application/x.gvbmod2.gm2': '.gm2'
            }
        },
        {
            description: 'Scratch 3 Project/Gvbvdxx Mod 2 - Legacy Project',
            accept: {
                'application/x.scratch.sb3': '.sb3'
            }
        }
    ],
    excludeAcceptAllOption: true
});

const showOpenFilePicker = async () => {
    const [handle] = await window.showOpenFilePicker({
        multiple: false,
        types: [
			{
				description: 'Gvbvdxx Mod 2 - Recent Project',
				accept: {
					'application/x.gvbmod2.gm2':['.gm2']
				}
			},
            {
                description: 'Scratch 3 Project/Gvbvdxx Mod 2 - Legacy Project',
                accept: {
                    'application/x.scratch.sb3': ['.sb', '.sb2', '.sb3']
                }
            }
        ]
    });
    return handle;
};

const createWritable = handle => handle.createWritable();

const closeWritable = async writable => {
    await writable.close();
};

const writeToWritable = async (writable, content) => {
    await writable.write(content);
};

export default {
    available,
    showOpenFilePicker,
    showSaveFilePicker,
    createWritable,
    closeWritable,
    writeToWritable
};
