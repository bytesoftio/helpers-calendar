<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [@bytesoftio/helpers-calendar](#bytesoftiohelpers-calendar)
  - [Installation](#installation)
  - [Description](#description)
  - [Usage](#usage)
    - [createCalendarMonthView](#createcalendarmonthview)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

# @bytesoftio/helpers-calendar

## Installation

`yarn add @bytesoftio/helpers-calendar` or `npm install @bytesoftio/helpers-calendar`

## Description

This is a collection of helpers useful when working with calendars and the likes.

## Usage

### createCalendarMonthView

Creates a 6x7 multidimensional array containing dates based on a given date. It can be used whenever you want to
build some sort of a calendar widget, showing current date and all the other dates within the same month, as a
pretty grid.

```ts
import { createCalendarMonthView } from "@bytesoftio/helpers-calendar"

const weeks = createCalendarMonthView(new Date("2020-04-26"))
```

This would result in something like this:

```
[
  [2020-03-30, 2020-03-31, 2020-04-01, 2020-04-02, 2020-04-03, 2020-04-04, 2020-04-05],
  [2020-04-06, 2020-04-07, 2020-04-08, 2020-04-09, 2020-04-10, 2020-04-11, 2020-04-12],
  [2020-04-13, 2020-04-14, 2020-04-15, 2020-04-16, 2020-04-17, 2020-04-18, 2020-04-19],
  [2020-04-20, 2020-04-21, 2020-04-22, 2020-04-23, 2020-04-24, 2020-04-25, 2020-04-26],
  [2020-04-27, 2020-04-28, 2020-04-29, 2020-04-30, 2020-05-01, 2020-05-02, 2020-05-03],
  [2020-05-04, 2020-05-05, 2020-05-06, 2020-05-07, 2020-05-08, 2020-05-09, 2020-05-10]
]
```

Now you can simply iterate over the weeks and dates and draw something like this:

```
        | MO | TU | WE | TH | FR | SA | SU |
        ------------------------------------
week 14 | 30 | 31 | 01 | 02 | 03 | 04 | 05 |
week 15 | 06 | 07 | 08 | 09 | 10 | 11 | 12 |
week 16 | 13 | 14 | 15 | 16 | 17 | 18 | 19 |
week 17 | 20 | 21 | 22 | 23 | 24 | 25 | 26 |
week 18 | 27 | 28 | 29 | 30 | 01 | 02 | 03 |
week 19 | 04 | 05 | 06 | 07 | 08 | 09 | 10 |
``` 