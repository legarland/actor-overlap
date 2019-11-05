import React, { useState, useEffect, useCallback } from 'react'
import AutoComplete from 'react-autocomplete'
import axios from 'axios'
import debounce from 'lodash/debounce'
import { apiUrl } from '../config'

const ItemSearch = ({
  onSelect = () => {},
  valid = true,
  clear = false,
  searched = false,
  onFocus = () => {}
}) => {
  const [data, setData] = useState([])
  const [value, setValue] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (clear) {
      setValue('')
      setData([])
    }
  }, [clear])

  const search = useCallback(
    debounce(val => {
      // setLoading(true)
      if (val && val.length > 1) {
        const getItems = async () => {
          try {
            const result = await axios.get(
              // `https://actor-overlap.azurewebsites.net/api/itemSearch?search=${value}`
              `${apiUrl}/itemSearch?search=${val}`
            )
            // console.log(result)
            setData(result.data.data)
            setLoading(false)
          } catch (err) {
            console.log(err)
          }
        }
        getItems()
      } else {
        setData([])
        setLoading(false)
      }
    }, 300),
    []
  )

  return (
    <AutoComplete
      getItemValue={item => item.id}
      items={data}
      value={value}
      inputProps={{
        className: `textbox ${loading ? 'inline-loader' : ''} ${
          valid ? 'valid' : ''
        }`,
        placeholder: 'Enter a Movie/Show',
        onFocus: () => {
          if (searched) {
            onFocus()
          }
        }
      }}
      onChange={(e, v) => {
        if (!loading) setLoading(true)
        if (!v && loading) setLoading(false)
        search(v)
        setValue(v)
      }}
      wrapperStyle={{
        display: 'block',
        paddingBottom: 10,
        borderBottom: 'solid 1px lightblue'
      }}
      renderMenu={(items, value, style) =>
        items.length ? (
          <div
            style={{ ...style, zIndex: 1 }}
            className="rounded-b-sm border border-gray-200 border-t-0 shadow fixed overflow-auto bg-white max-h-1/2"
            children={items}
          />
        ) : (
          <div />
        )
      }
      menuStyle={
        {
          // TODO: don't cheat, let it flow to the bottom
        }
      }
      onSelect={(val, item) => {
        setValue(item.title)
        onSelect({
          title: item.title,
          id: item.id,
          image: item.image
        })
      }}
      renderItem={(item, isHighlighted) => (
        <div
          key={item.id}
          className={`p-3 flex justify-between ${
            isHighlighted ? 'bg-indigo-200' : ''
          }`}
        >
          <span>{item.title}</span>
          <span
            style={{
              marginLeft: 10
            }}
          >
            {item.year} - {item.type && item.type.replace('feature', 'movie')}
          </span>
        </div>
      )}
    />
  )
}

export default ItemSearch
