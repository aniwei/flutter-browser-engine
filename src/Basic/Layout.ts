import type { Size } from '@internal/Geometry'
import type { BoxConstraints, RenderBox } from '@ui/RenderBox'


export type ChildLayouter =  { (child: RenderBox, constraints: BoxConstraints): Size } 

