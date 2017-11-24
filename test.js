describe('Array',() => {
	describe('#indexOf()', () => {
		it('should return -1 when the value is not present', () => {
			const result = [1, 2, 3].indexOf(3)
			result.should.equal(-1)
		})
	})
})
