
function getParam(this: string, index: number): string {
    const params = this.split(',');
    if(index < 0 || params.length <= index) {
        return ''
    }

    return this.split(',')[index]
}

interface String {
    getParam(this: string, index: number): string;
}

String.prototype.getParam = getParam;

console.log('adassssd, 123, ok'.getParam(1))
