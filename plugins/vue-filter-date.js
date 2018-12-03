import Vue from 'vue'
import parse from 'date-fns/parse'
import format from 'date-fns/format'


Vue.filter('output-date', input => format(parse(input), 'MMM D, YYYY h:mm a'))
