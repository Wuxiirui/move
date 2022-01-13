 //% blockId=robotbit_matrix_clear block="Matrix Clear"
    //% weight=65
    //% blockGap=50
    export function MatrixClear(): void {
        if (!initializedMatrix) {
            matrixInit();
            initializedMatrix = true;
        }
        for (let i = 0; i < 16; i++) {
            matBuf[i + 1] = 0;
        }
        matrixShow();
    }

 //% blockId=robotbit_matrix_draw block="Matrix Draw|X %x|Y %y"
    //% weight=69
    export function MatrixDraw(x: number, y: number): void {
        if (!initializedMatrix) {
            matrixInit();
            initializedMatrix = true;
        }
        x = Math.round(x)
        y = Math.round(y)
        
        let idx = y * 2 + Math.idiv(x, 8);
        
        let tmp = matBuf[idx + 1];
        tmp |= (1 << (x % 8));
        matBuf[idx + 1] = tmp;
    }



    //% blockId=robotbit_matrix_refresh block="Matrix Refresh"
    //% weight=69
    export function MatrixRefresh(): void {
        if (!initializedMatrix) {
            matrixInit();
            initializedMatrix = true;
        }
        matrixShow();
    }
