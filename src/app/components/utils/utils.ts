/**
 * Utility function for multiple usages.
 * @author Solution Ladder <info@solutionladder.com> 
 */

/**
 * Randomize given array.
 * @param array 
 */
export function randomizeArray(array: any[]): any[] {
    if (!array) return [];
    return array
        .map(value => ({ value, sort: Math.random() }))
        .sort((a, b) => a.sort - b.sort)
        .map(({ value }) => value);
}