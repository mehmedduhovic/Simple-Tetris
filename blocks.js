    //Tetris blocks
    const width = 10;
    const displayWidth = 4;

    const lBlock = [
        [1, width + 1, width * 2 + 1, 2],
        [width, width + 1, width + 2, width * 2 + 2],
        [1, width + 1, width * 2, width * 2 + 1],
        [width, width * 2, width * 2 + 1, width * 2 + 2],
    ];

    const zBlock = [
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1],
        [0, width, width + 1, width * 2 + 1],
        [width + 1, width + 2, width * 2, width * 2 + 1],
    ];

    const tBlock = [
        [1, width, width + 1, width + 2],
        [1, width + 1, width + 2, width * 2 + 1],
        [width, width + 1, width + 2, width * 2 + 1],
        [1, width, width + 1, width * 2 + 1],
    ];

    const oBlock = [
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
        [0, 1, width, width + 1],
    ];

    const iBlock = [
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3],
        [1, width + 1, width * 2 + 1, width * 3 + 1],
        [width, width + 1, width + 2, width + 3],
    ];

    const blocks = [lBlock, zBlock, tBlock, oBlock, iBlock];

    const nextZBlock = [
        [0, displayWidth, displayWidth + 1, displayWidth * 2 + 1],
        [
        displayWidth + 1,
        displayWidth + 2,
        displayWidth * 2,
        displayWidth * 2 + 1,
        ],
        [0, displayWidth, displayWidth + 1, displayWidth * 2 + 1],
        [
        displayWidth + 1,
        displayWidth + 2,
        displayWidth * 2,
        displayWidth * 2 + 1,
        ],
    ];

    const nextTBlock = [
        [1, displayWidth, displayWidth + 1, displayWidth + 2],
        [1, displayWidth + 1, displayWidth + 2, displayWidth * 2 + 1],
        [displayWidth, displayWidth + 1, displayWidth + 2, displayWidth * 2 + 1],
        [1, displayWidth, displayWidth + 1, displayWidth * 2 + 1],
    ];

    const nextLBlock = [
        [1, displayWidth + 1, displayWidth * 2 + 1, 2],
        [displayWidth, displayWidth + 1, displayWidth + 2, displayWidth * 2 + 2],
        [1, displayWidth + 1, displayWidth * 2, displayWidth * 2 + 1],
        [
        displayWidth,
        displayWidth * 2,
        displayWidth * 2 + 1,
        displayWidth * 2 + 2,
        ],
    ];

    const nextOBlock = [
        [
        displayWidth * 1 + 1,
        displayWidth * 1 + 2,
        displayWidth * 2 + 1,
        displayWidth * 2 + 2,
        ],
        [
        displayWidth * 1 + 1,
        displayWidth * 1 + 2,
        displayWidth * 2 + 1,
        displayWidth * 2 + 2,
        ],
        [
        displayWidth * 1 + 1,
        displayWidth * 1 + 2,
        displayWidth * 2 + 1,
        displayWidth * 2 + 2,
        ],
        [
        displayWidth * 1 + 1,
        displayWidth * 1 + 2,
        displayWidth * 2 + 1,
        displayWidth * 2 + 2,
        ],
    ];

    const nextIBlock = [
        [1, displayWidth + 1, displayWidth * 2 + 1, displayWidth * 3 + 1],
        [displayWidth, displayWidth + 1, displayWidth + 2, displayWidth + 3],
        [1, displayWidth + 1, displayWidth * 2 + 1, displayWidth * 3 + 1],
        [displayWidth, displayWidth + 1, displayWidth + 2, displayWidth + 3],
    ];

    const nextBlocks = [
        nextLBlock,
        nextZBlock,
        nextTBlock,
        nextOBlock,
        nextIBlock,
    ];

    const colors = [
        'lightcoral',
        'green',
        'blue',
        'orange',
        'purple'
    ];

    const scores = [10, 50, 100, 200, 500];
    const speeds = [800, 400, 200, 100, 50];

    export {blocks, nextBlocks, width, displayWidth, colors, scores, speeds};
