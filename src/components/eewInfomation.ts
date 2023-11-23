import { Forgintsunami, HypocenterFormat, Infoonly, PointFormat, Scale, Tsunamitype, Typeofinfo } from "../types"
import { JMAQuake, Points, QuakeDetail, QuakeIssues } from "../types/jmaquake"

export class EEWInfomation implements JMAQuake {
	_id: string
	code: 551
	time: string
	issue: QuakeIssues
	earthquake: QuakeDetail
	points: Points[]

	constructor(data: EEWInfomation) {
		this._id = data._id
		this.issue = data.issue
		this.earthquake = data.earthquake
		this.points = data.points
	}
}